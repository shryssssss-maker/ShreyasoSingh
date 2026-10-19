# Graph Report - ShreyasoSingh  (2026-10-20)

## Corpus Check
- 13 files · ~556 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 123 nodes · 110 edges · 16 communities (13 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- compilerOptions
- package.json
- package.json
- package.json
- include
- dependencies
- devDependencies
- compilerOptions
- package.json
- tsconfig.json
- Portfolio monorepo
- layout.tsx
- next.config.ts
- next-env.d.ts

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 13 edges
2. `compilerOptions` - 6 edges
3. `include` - 6 edges
4. `scripts` - 5 edges
5. `scripts` - 5 edges
6. `Portfolio monorepo` - 5 edges
7. `lib` - 4 edges
8. `workspaces` - 3 edges
9. `include` - 3 edges
10. `@portfolio/ui` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (16 total, 3 thin omitted)

### Community 0 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, esModuleInterop, forceConsistentCasingInFileNames, isolatedModules, jsx, lib, module, moduleResolution (+8 more)

### Community 1 - "package.json"
Cohesion: 0.14
Nodes (13): engines, node, name, private, scripts, build, dev, start (+5 more)

### Community 2 - "package.json"
Cohesion: 0.14
Nodes (13): devDependencies, @portfolio/typescript-config, exports, @portfolio/typescript-config, react, name, peerDependencies, react (+5 more)

### Community 3 - "package.json"
Cohesion: 0.17
Nodes (11): devDependencies, @portfolio/typescript-config, @portfolio/typescript-config, name, private, scripts, build, dev (+3 more)

### Community 4 - "include"
Cohesion: 0.18
Nodes (10): exclude, extends, include, @portfolio/typescript-config/base.json, src/**/*.ts, src/**/*.tsx, .next/dev/types/**/*.ts, next-env.d.ts (+2 more)

### Community 5 - "dependencies"
Cohesion: 0.22
Nodes (9): dependencies, next, @portfolio/ui, react, react-dom, react, next, @portfolio/ui (+1 more)

### Community 6 - "devDependencies"
Cohesion: 0.22
Nodes (9): devDependencies, @types/node, @types/react, @types/react-dom, typescript, @types/node, @types/react, @types/react-dom (+1 more)

### Community 7 - "compilerOptions"
Cohesion: 0.25
Nodes (8): compilerOptions, allowJs, baseUrl, incremental, paths, plugins, @/*, ./src/*

### Community 8 - "package.json"
Cohesion: 0.33
Nodes (5): files, name, private, version, base.json

### Community 9 - "tsconfig.json"
Cohesion: 0.33
Nodes (5): extends, include, @portfolio/typescript-config/base.json, src/**/*.ts, src/**/*.tsx

### Community 10 - "Portfolio monorepo"
Cohesion: 0.33
Nodes (5): Commands, Getting started, Portfolio monorepo, Shared components, Structure

## Knowledge Gaps
- **75 isolated node(s):** `nextConfig`, `name`, `version`, `private`, `dev` (+70 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.018) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `nextConfig`, `name`, `version` to the rest of the system?**
  _75 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._