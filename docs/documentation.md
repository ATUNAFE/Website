# Project Content Structure Documentation

## Overview
This document describes the organization and conventions of the content files in this project, with a special focus on the `_content` directory. The `_content` folder is the main source for all site content, structured in Markdown files and subfolders, and is essential for site generation and content management.

---

## 1. `_content` Directory Structure

The `_content` directory contains all the content used by the website, organized by type and section. The main subfolders are:

- `images/` — All image assets, further divided by usage (banners, instruments, logos, etc.).
- `pages/` — All textual content in Markdown format, organized by site section (aboutUs, events, homepage, members, music, tiet, etc.).

### Example Structure
```
_content/
  images/
    banners/
    instruments/
    logos/
    ...
  pages/
    footer.md
    header.md
    aboutUs/
      index.md
      banner.md
      godparents.md
      ...
    events/
      index.md
      banner.md
      events.md
      ...
    homepage/
      index.md
      heroSection.md
      ...
    members/
      active/
        banner.md
        index.md
        caloiras/
          Aquafresh.md
          ...
      inactive/
        ...
    music/
      index.md
      ...
    tiet/
      index.md
      ...
```

## 2. Markdown File Conventions & Types

- **Each Markdown file represents a content block, page section, or data item.**
- **Naming:** File and folder names are in English and use camelCase.
- **Frontmatter:** All files use YAML frontmatter (between `---` lines) for metadata (e.g., id, title, slug, etc.).
- **Content:** The body contains Markdown-formatted text, which may include headings, lists, images, and links.

### Types of Markdown Files

#### 2.1. `index.md` (Section Index)
**Critical file for each section.**
Defines the mapping between content and React components. Each `index.md` lists the components to render for that section, in order, using their `type` (React component name) and `id` (which must match the id in the corresponding content markdown file).

**Example:**
```
---
id: "page-home"
title:
  text: "Homepage"
slug: "/"
components:
  - type: HeroSection
    id: "heroSection-home"
  - type: FollowUsSection
    id: "followUsSection-home"
  - type: PhotoAlbum
    id: "photoAlbum-home"
  - type: NextEvents
    id: "nextEvents-home"
---
```

**Importance:**
- The `index.md` file is essential for the correct rendering of each section/page.
- If you add, remove, or rename a component markdown file, you must update the corresponding `index.md`.
- The `id` in `index.md` must match the `id` in the referenced markdown file.

#### 2.2. Component Markdown Files
Contain the content and metadata for a specific React component. The structure and fields depend on the component type (see each file carefuly).

#### 2.3. Data Markdown Files
Used for dynamic lists or items (e.g., events, music pieces). Placed in `data/` subfolders.

#### 2.4. Member Markdown Files
Used for individual member profiles, grouped by status and type.

---

## 3. Section-Specific Organization

### `aboutUs/`
- Contains Markdown files for each about section (e.g., `history.md`, `members.md`).
- `banner.md` is used for the section's banner image or text.

### `events/`
- Contains event-related Markdown files.
- `data/` subfolder holds individual event details (e.g., `portuscalle22.md`).

### `homepage/`
- Contains content blocks for homepage sections (e.g., `heroSection.md`, `nextEvents.md`).

### `members/`
- Divided into `active/` and `inactive/` members.
- Each member has a Markdown file under their respective group (e.g., `caliros/Aquafresh.md`).
- `banner.md` and `index.md` provide section-level content.

### `music/`
- Contains music-related content (e.g., `discography.md`, `repertoire.md`).
- `data/` subfolder for specific music pieces.

### `tiet/`
- Contains content for the T.I.E.T. event/section.
- `data/` subfolder for each edition (e.g., `i.md`, `ii.md`).

---

## 4. Adding or Editing Content

- **To add a new section:** Create a new folder and Markdown files as needed, following the naming and structure conventions.
- **To add a new member/event/edition:** Add a new Markdown file in the appropriate subfolder.
- **To edit content:** Update the Markdown file. If using frontmatter, keep the format consistent.

---

## 5. Best Practices

- **Keep file and folder names consistent and descriptive.**
- **Use frontmatter for metadata when needed.**
- **Organize images in the correct subfolders.**
- **Review existing files for structure examples before creating new ones.**

---

## 6. Notes

- The content structure is tightly coupled with the website's code. Changing file/folder names or structure may require code updates.
- Always test content changes locally before deploying.

---
