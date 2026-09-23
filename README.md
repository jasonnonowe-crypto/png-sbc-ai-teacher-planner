# PNG SBC AI Teacher Planner — PC Edition

## What this is
A Windows desktop application based on the user's existing mobile interface.

## Features
- Grade 1–8
- Yearly, Termly, Weekly and Daily planning
- PNG SBC curriculum-library architecture
- Assignment generator
- Saved plans
- Word-compatible export
- Printing
- Teacher/school settings
- Optional secure AI server endpoint
- No OpenAI API key stored in the desktop client

## Install for development
1. Install Node.js LTS on Windows.
2. Open Command Prompt in this folder.
3. Run: npm install
4. Run: npm start

## Build a Windows installer
Run:
npm run build

The installer will be generated in the dist folder.

## Important
The included curriculum.json is the structured foundation. It intentionally does not fabricate grade-specific official standards. Populate it with verified PNG Department of Education syllabus/teacher-guide data before treating entries as official.

For production AI, set the secure server URL in Settings. The server should hold the OpenAI API key and retrieve/ground against the verified curriculum database.
