import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  SimpleGrid,
  HStack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaStar, FaCodeBranch, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionMark from "./SectionMark";

const MotionBox = motion(Box);

// Ganti ini kalau username GitHub-nya berubah.
const GITHUB_USERNAME = "lolman-30";
const CACHE_KEY = `gh-repos-${GITHUB_USERNAME}`;
const CACHE_TTL = 1000 * 60 * 30; // 30 menit, biar tidak kena rate limit GitHub

// Warna aksen per bahasa, biar tiap repo punya identitas visual singkat
// tanpa perlu logo — hanya dipakai untuk beberapa bahasa yang paling umum.
const LANGUAGE_COLOR = {
  JavaScript: "#F1E05A",
  TypeScript: "#3178C6",
  PHP: "#4F5D95",
  HTML: "#E34C26",
  CSS: "#563D7C",
  Python: "#3572A5",
  Java: "#B07219",
};

function timeAgo(dateString) {
  const diff = Date.now() - new Date(dateString).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days < 1) return "hari ini";
  if (days < 30) return `${days} hari lalu`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} bulan lalu`;
  return `${Math.floor(months / 12)} tahun lalu`;
}

const RepoCard = ({ repo, index }) => (
  <MotionBox
    as={Link}
    href={repo.html_url}
    target="_blank"
    rel="noreferrer"
    _hover={{ textDecoration: "none" }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
    display="block"
    border="1px solid"
    borderColor="whiteAlpha.150"
    p={5}
    _hoverBorder={{}}
    sx={{
      transition: "border-color 0.2s ease, transform 0.2s ease",
      "&:hover": { borderColor: "signal.500", transform: "translateY(-2px)" },
    }}
  >
    <HStack justify="space-between" mb={2}>
      <Text fontFamily="heading" fontWeight="600" color="slate.100" fontSize="md" noOfLines={1}>
        {repo.name}
      </Text>
      <Icon as={FaExternalLinkAlt} color="slate.500" boxSize={3} />
    </HStack>

    <Text fontSize="sm" color="slate.400" noOfLines={2} minH="40px">
      {repo.description || "Tidak ada deskripsi."}
    </Text>

    <HStack mt={4} spacing={4} fontFamily="mono" fontSize="xs" color="slate.500">
      {repo.language && (
        <HStack spacing={1.5}>
          <Box
            w="8px"
            h="8px"
            borderRadius="full"
            bg={LANGUAGE_COLOR[repo.language] || "line.500"}
          />
          <Text>{repo.language}</Text>
        </HStack>
      )}
      <HStack spacing={1}>
        <Icon as={FaStar} />
        <Text>{repo.stargazers_count}</Text>
      </HStack>
      <HStack spacing={1}>
        <Icon as={FaCodeBranch} />
        <Text>{repo.forks_count}</Text>
      </HStack>
      <Text ml="auto">{timeAgo(repo.pushed_at)}</Text>
    </HStack>
  </MotionBox>
);

const SkeletonCard = () => (
  <Box border="1px solid" borderColor="whiteAlpha.100" p={5}>
    <Box h="16px" w="60%" bg="whiteAlpha.100" mb={3} />
    <Box h="12px" w="90%" bg="whiteAlpha.50" mb={2} />
    <Box h="12px" w="70%" bg="whiteAlpha.50" mb={4} />
    <Box h="12px" w="40%" bg="whiteAlpha.50" />
  </Box>
);

const GitHubRepos = () => {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      // Coba pakai cache dulu biar cepat & hemat kuota API
      try {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
        if (cached && Date.now() - cached.savedAt < CACHE_TTL) {
          setRepos(cached.data);
          return;
        }
      } catch (e) {
        // abaikan, lanjut fetch biasa
      }

      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`
        );
        if (!res.ok) throw new Error("GitHub API error");
        const data = await res.json();

        const cleaned = data
          .filter((r) => !r.fork && !r.archived)
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
          .slice(0, 6);

        if (!cancelled) {
          setRepos(cleaned);
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ data: cleaned, savedAt: Date.now() })
          );
        }
      } catch (e) {
        if (!cancelled) setError(true);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Box mt={{ base: 16, md: 20 }}>
      <HStack justify="space-between" align="flex-end" mb={{ base: 8, md: 12 }}>
        <SectionMark tag="github" title="Repositori terbaru" mb={0} />
        <Link
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          fontFamily="mono"
          fontSize="sm"
          color="line.500"
          display={{ base: "none", sm: "flex" }}
          alignItems="center"
          gap={2}
          _hover={{ color: "signal.500" }}
        >
          <Icon as={FaGithub} /> lihat semua
        </Link>
      </HStack>

      {error && (
        <Text fontSize="sm" color="slate.500" fontFamily="mono">
          Tidak bisa memuat repositori sekarang.{" "}
          <Link
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            color="line.500"
          >
            Lihat langsung di GitHub →
          </Link>
        </Text>
      )}

      {!error && !repos && (
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={5}>
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </SimpleGrid>
      )}

      {!error && repos && repos.length === 0 && (
        <Text fontSize="sm" color="slate.500" fontFamily="mono">
          Belum ada repositori publik.
        </Text>
      )}

      {!error && repos && repos.length > 0 && (
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={5}>
          {repos.map((repo, i) => (
            <RepoCard key={repo.id} repo={repo} index={i} />
          ))}
        </SimpleGrid>
      )}

      <Box display={{ base: "block", sm: "none" }} mt={5}>
        <Link
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          fontFamily="mono"
          fontSize="sm"
          color="line.500"
        >
          <Icon as={FaGithub} mr={2} />
          lihat semua di GitHub
        </Link>
      </Box>
    </Box>
  );
};

export default GitHubRepos;
