---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

{% capture publications %}{% bibliography %}{% endcapture %}

{% if publications contains '<li' %}

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{{ publications }}

</div>

{% else %}

<p>No publications yet.</p>

{% endif %}
