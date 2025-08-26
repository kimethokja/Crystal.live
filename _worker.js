export default {
  async fetch() {
    const target = "http://crtanger.org:80/get.php?username=Fabitv&password=ZXXUMBFNK1&output=ts&type=m3u";
    const r = await fetch(target, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!r.ok) return new Response("Upstream error: "+r.status, {status:r.status});
    const body = await r.text();
    return new Response(body, {
      headers: {
        "Content-Type": "audio/x-mpegurl; charset=utf-8",
        "Content-Disposition": 'inline; filename="playlist.m3u"'
      }
    });
  }
}
