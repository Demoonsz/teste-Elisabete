const CACHE='elisabete-app-v16-1';const CORE=['./','./index.html','./manifest.webmanifest','./assets/icone-192.png','./assets/icone-512.png','./conteudos/videos.json'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)))});
self.addEventListener('activate',event=>{event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()]))});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{const req=event.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==self.location.origin)return;
 if(req.mode==='navigate'||url.pathname.endsWith('/videos.json')){
 event.respondWith(fetch(req).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return response}).catch(()=>caches.match(req).then(r=>r||caches.match('./index.html'))));return;
 }
 event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(response=>{if(response.ok)caches.open(CACHE).then(c=>c.put(req,response.clone()));return response})))
});
