# Lighthouse Performance Metrics Explained

This repository provides practical examples and explanations of Lighthouse performance metrics. Each metric is demonstrated with dedicated HTML and JavaScript examples to help you understand how they work and how to optimize them.

## Metrics Covered

- **First Contentful Paint (FCP)** - How quickly content appears on your page
- **Largest Contentful Paint (LCP)** - How quickly the largest content element becomes visible
- **First Input Delay (FID)** - How quickly your page responds to user interactions
- **Cumulative Layout Shift (CLS)** - How stable your page layout is during loading
- **Time to Interactive (TTI)** - When your page becomes fully interactive
- **Total Blocking Time (TBT)** - The total time when the main thread was blocked
- **Speed Index** - How quickly content is visually displayed during page load

## PerformanceObserver Examples

This repo also includes examples of using the PerformanceObserver API to measure real user metrics in production.

## GitHub Actions Integration

The repository includes GitHub Actions workflows that:
1. Run Lighthouse audits on pull requests
2. Block merging to master if the performance score is below 90

## Getting Started

1. Clone this repository
2. Navigate to the examples directory
3. Open the HTML files in your browser to see the metrics in action

## Contributing

Contributions are welcome! Please make sure your changes maintain a Lighthouse performance score of at least 90. 