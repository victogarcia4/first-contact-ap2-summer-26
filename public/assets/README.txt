DROP YOUR MEDIA HERE
=====================

This site expects two files in this /public/assets/ folder:

1. intro.mp4   ← REQUIRED
   Your "Intro to AP.mp4" file, renamed to exactly:  intro.mp4
   It is used as the full-screen background video in the Hero and Kickoff
   sections. The site works without it (it falls back to a black background),
   but the video is the whole vibe — add it.

   Tip: keep it under ~25 MB for fast loading on Netlify/Vercel. If yours is
   large, compress it first, for example with ffmpeg:
     ffmpeg -i "Intro to AP.mp4" -vf "scale=1280:-2" -c:v libx264 -crf 28 -an intro.mp4
   (-an strips audio, which the background video doesn't need since it's muted.)

2. hero-poster.jpg   ← OPTIONAL
   A single still frame shown before the video loads. Grab one with:
     ffmpeg -i intro.mp4 -ss 00:00:01 -vframes 1 hero-poster.jpg
   If you skip it, the poster reference is simply ignored.

Also feel free to drop the syllabus PDF here (e.g. syllabus.pdf) if you want to
link to it from the site later.
