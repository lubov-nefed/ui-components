const paths = {
  '/': '/pages/home/index.html',
  '/buttons': '/pages/buttons/buttons.html',
};

const getPath = async () => {
  const url = window.location.pathname;
  const path = paths[url];
  console.log(path);
};

export { getPath, paths };
