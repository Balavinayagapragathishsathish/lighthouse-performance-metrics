# Lighthouse Performance Metrics
## Understanding Web Performance Optimization

---

## What is Lighthouse?

- Open-source automated tool by Google for improving web page quality
- Provides audits for:
  - Performance
  - Accessibility
  - Progressive Web Apps
  - SEO
  - Best Practices
- Available in Chrome DevTools, as a CLI, or as a Node module

---

## Core Web Vitals

![Core Web Vitals](https://web.dev/static/articles/vitals/web-vitals-header.svg)

- Google's essential metrics for user experience
- Impacts SEO ranking
- Three key metrics:
  - **LCP**: Largest Contentful Paint (loading)
  - **FID**: First Input Delay (interactivity)
  - **CLS**: Cumulative Layout Shift (visual stability)

---

## First Contentful Paint (FCP)

- Measures time until first content appears
- **Good**: 0-1.8s
- **Needs Improvement**: 1.8-3.0s
- **Poor**: Over 3.0s

### How to improve:
- Eliminate render-blocking resources
- Optimize server response time
- Preload critical assets

---

## Largest Contentful Paint (LCP)

- Measures loading performance
- Time until largest content element is visible
- **Good**: 0-2.5s
- **Needs Improvement**: 2.5-4.0s
- **Poor**: Over 4.0s

### How to improve:
- Optimize images
- Remove render-blocking resources
- Implement server-side rendering

---

## First Input Delay (FID)

- Measures interactivity
- Time from first user interaction to browser response
- **Good**: 0-100ms
- **Needs Improvement**: 100-300ms
- **Poor**: Over 300ms

### How to improve:
- Break up long tasks
- Optimize event handlers
- Use web workers for complex tasks

---

## Cumulative Layout Shift (CLS)

- Measures visual stability
- Quantifies unexpected layout shifts
- **Good**: 0-0.1
- **Needs Improvement**: 0.1-0.25
- **Poor**: Above 0.25

### How to improve:
- Set size attributes on images and videos
- Reserve space for dynamic content
- Avoid inserting content above existing content

---

## Time to Interactive (TTI)

- Measures when page becomes fully interactive
- **Good**: 0-3.8s
- **Needs Improvement**: 3.9-7.3s
- **Poor**: Over 7.3s

### How to improve:
- Minimize main thread work
- Reduce JavaScript payload
- Defer non-critical JavaScript

---

## Total Blocking Time (TBT)

- Measures main thread blocking time
- Sum of all "long tasks" (>50ms) between FCP and TTI
- **Good**: 0-200ms
- **Needs Improvement**: 200-600ms
- **Poor**: Over 600ms

### How to improve:
- Optimize JavaScript execution
- Break up long tasks
- Remove unused JavaScript

---

## Speed Index

- Measures how quickly content is visually displayed
- **Good**: 0-3.4s
- **Needs Improvement**: 3.4-5.8s
- **Poor**: Over 5.8s

### How to improve:
- Optimize critical rendering path
- Reduce render-blocking resources
- Implement progressive rendering

---

## Measuring Performance

### Lab Tools:
- Lighthouse
- WebPageTest
- Chrome DevTools

### Field Data:
- Chrome User Experience Report (CrUX)
- PerformanceObserver API
- Web Vitals JavaScript library

---

## PerformanceObserver Example

```javascript
// Create observer for paint timing
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(`${entry.name}: ${entry.startTime}ms`);
  }
});

// Start observing paint timing events
observer.observe({ type: 'paint', buffered: true });
```

---

## Performance Optimization Strategies

1. **Optimize images** - Compress, resize, and use modern formats
2. **Minimize JavaScript** - Code splitting, tree shaking, minification
3. **Efficient loading** - Lazy loading, preloading critical assets
4. **Optimize CSS** - Inline critical CSS, remove unused styles
5. **Server optimization** - CDN, caching, compression
6. **Modern best practices** - HTTP/2, responsive images, service workers

---

## Tools & Resources

- [web.dev/measure](https://web.dev/measure/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
- [Web Vitals Chrome Extension](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma)
- [WebPageTest](https://www.webpagetest.org/)

---

## Thank You!

Questions? 