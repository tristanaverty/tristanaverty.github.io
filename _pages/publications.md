---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h1 class="post-title">{{ "journal papers" }}</h1>

{% bibliography journal_papers.bib %}

<h1 class="post-title">{{ "national conferences" }}</h1>

{% bibliography nat_conf_papers.bib %}

</div>


