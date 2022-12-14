const _Environments = {
  development: {
    BASE_URL: `https://hec-rn-default-rtdb.firebaseio.com/`,
    LOGIN: `/xxx/xxx`,
  },
};

function getEnvironment() {
  const platform = 'development';
  return _Environments[platform];
}

const Environment = getEnvironment();
export default Environment;
