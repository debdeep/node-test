const dns = require('dns').promises;

(async () => {
  try {
    const srv = await dns.resolveSrv('_mongodb._tcp.myproject.c6p6r1i.mongodb.net');
    console.log('SRV records:', srv);
  } catch (err) {
    console.error('SRV lookup failed:', err);
  }
})();