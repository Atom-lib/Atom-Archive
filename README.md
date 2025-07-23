<p align="center">
  <img src="https://badgen.net/badge/Status/Development/orange?icon=github" />
  <img src="https://badgen.net/badge/Source/Community/blue" />
  <img src="https://badgen.net/badge/license/GNU-Public/green" />
</p>

<p align="center">
  <img width="600" height="168" alt="ATOM Archive Banner" src="https://github.com/user-attachments/assets/2b80c1ea-f9e0-4602-b843-1c1ab44d9e77" />
</p>

**Welcome to ATOM — Algorithms, Techniques, Optics, Mechanics**

A personal and community-driven archive of resources for programming, graphics, physics, and math.  
This project is for people who enjoy building things from scratch, exploring how systems work under the hood, and sharing what they learn.

## About

This archive includes guides, notes, links, and learning materials that we personally use and keep for reference.  
If you find it helpful too — great! If you have useful resources to share, feel free to join our [Discord server](https://discord.gg/YDnXBnj9kh)

## How to Contribute

### 1. Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/atom-lib/Atom-Archive.git
```

### 2. Open the Project and Find `data.json`
- The `data.json` file is in the root folder.
- It holds all resources, organized by categories like Mathematics, Physics and Graphics
- Each category has topics like General, Shaders, Trigonometry, and more.

### 3. Add a New Resource

Here's and example of how a section is structured:
```json
"Mathematics": { // Main category
  "General": { // General section
    "3D_Math_Primer_for_Graphics_and_Game_Development": "https://www.gamemath.com/book/intro.html", // Online book
    "What_Kind_of_Math_Should_Game_Developers_Know_?_by_SimonDev": "https://youtu.be/eRVRioN4GwA?feature=shared" // YouTube video
  },
  "Trigonometry": { // Trigonometry section
    "Trigonometry_by_Freya_Holmer": "https://youtu.be/1NLekEd770w", // Youtube video
    "Trigonometry_by_Natsu_Games": "https://youtu.be/FZ9HWff734c" // Youtube video
  }
}

```
To add your own :

| Rule                          | Description                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| **Use snake_case**            | Use snake_case formatting for titles. Example: `"My_New_Math_Guide"`        |
| **Place in correct section**  | Add the resource under the appropriate topic (e.g., `General`, `Shaders`)   |
| **Use valid URLs**            | Ensure the link is working and points to the correct resource               |
| **Add new sections if needed**| You may create a new topic block if it doesn't already exist                |
| **YouTube videos**            | Include the author's name in the title. Example: `"Intro_to_Shaders_by_Freya_Holmer"` |

### 4. Submit Changes

Once you've added your resources:

- Save the `data.json` file
- Commit your changes with a clear message
- Open a pull request on GitHub

Your contribution will be reviewed and merged if everything is in order.
