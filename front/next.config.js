module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/uploads",
        permanent: false,
      },
    ];
  },
};
