---
layout: page
permalink: /publications/
title: publications & datasets
nav: true
nav_order: 4
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h1 class="post-title">{{ "journal papers" }}</h1>

{% bibliography -f {{ site.scholar.bibliography_journal_papers }} %}

<h1 class="post-title">{{ "national conferences" }}</h1>

{% bibliography -f {{ site.scholar.bibliography_nat_conf_papers }} %}

<h1 class="post-title">{{ "datasets" }}</h1>

{% bibliography -f {{ site.scholar.bibliography_datasets }} %}

</div>


