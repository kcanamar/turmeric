import{x as c,Z as s,W as d,S as l,b as v}from"./web-vitals.3191d9b3.js";var u="@vercel/analytics",f="0.1.11",p=()=>{window.va||(window.va=function(...n){(window.vaq=window.vaq||[]).push(n)})};function w(){return typeof window<"u"}function m(){try{const e="production";return e==="development"||e==="test"}catch{return!1}}function h(e="auto"){return e==="auto"?m()?"development":"production":e}var b=(e={debug:!0})=>{var n;if(!w())return;const t=h(e.mode);p(),e.beforeSend&&((n=window.va)==null||n.call(window,"beforeSend",e.beforeSend));const i=t==="development"?"https://cdn.vercel-insights.com/v1/script.debug.js":"/_vercel/insights/script.js";if(document.head.querySelector(`script[src*="${i}"]`))return;const o=document.createElement("script");o.src=i,o.defer=!0,o.setAttribute("data-sdkn",u),o.setAttribute("data-sdkv",f),t==="development"&&e.debug===!1&&o.setAttribute("data-debug","false"),document.head.appendChild(o)};const r="https://vitals.vercel-analytics.com/v1/vitals",g=()=>"connection"in navigator&&navigator.connection&&"effectiveType"in navigator.connection?navigator.connection.effectiveType:"",a=(e,n)=>{const t={dsn:n.analyticsId,id:e.id,page:n.path,href:location.href,event_name:e.name,value:e.value.toString(),speed:g()},i=new Blob([new URLSearchParams(t).toString()],{type:"application/x-www-form-urlencoded"});navigator.sendBeacon?navigator.sendBeacon(r,i):fetch(r,{body:i,method:"POST",credentials:"omit",keepalive:!0})};function y(){const e="prj_xOFkhJ9P6bxkTjsMhjqvztGf9Dvi",n={path:window.location.pathname,analyticsId:e};try{c(t=>a(t,n)),s(t=>a(t,n)),d(t=>a(t,n)),l(t=>a(t,n)),v(t=>a(t,n))}catch(t){console.error("[Analytics]",t)}}const S="production";b({mode:S});y();