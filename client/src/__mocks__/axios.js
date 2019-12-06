let data = [
  {
    name: "Chicken",
    count: "2 lbs",
    aisle: 14,
    showEdit: false,
    id: 1
  }
];

const getIdFromUrl = url => {
  return /([^\/]+$)/.exec(url)[0];
};

export default {
  get: () => Promise.resolve({ data }),
  post: (url, val) => {
    data = [...data, val];
    return Promise.resolve({ data: val });
  },
  patch: (url, val) => {
    data = data.map(item =>
      parseInt(getIdFromUrl(url)) === item.id ? { ...val } : item
    );
    console.log(data);
    return Promise.resolve({ data: val });
  },
  delete: id => {
    const valId = parseInt(getIdFromUrl(id));
    data = data.filter(item => item.id !== valId);
  }
};
