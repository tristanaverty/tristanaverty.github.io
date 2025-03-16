---
layout: page
title: publications
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->
<div class="publications">
    <h1 class="post-title">{{ "journal papers" }}</h1>
    {% bibliography -f {{ site.scholar.bibliography_journal_papers }} %}
    

    <h1 class="post-title">{{ "national conferences" }}</h1>
    {% bibliography -f {{ site.scholar.bibliography_national_conferences }} %}
</div>


