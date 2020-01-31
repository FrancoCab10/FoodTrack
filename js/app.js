const wsUrl = 'http://192.168.0.165:1337';

////// FOOD /////
async function createFood(name, color, icon) {
  try {
    const resp = await axios.post(wsUrl + '/food', { name, color, icon});
    createStock(resp.data.id);
    return resp.data;
  }
  catch(e) {
    return { error: true, details: e };
  }
}

async function getAllFood() {
  try {
    const resp = await axios.get(wsUrl + `/food`);
    return resp.data;
  }
  catch (e) {
    return { error: true, details: e };
  }
}

async function getOneFood(id) {
  try {
    const resp = await axios.get(wsUrl + `/food/${id}`);
    return resp.data;
  }
  catch (e) {
    return {error: true, details: e};
  }
}

////// STOCK /////
async function createStock(food) {
  try {
    const aux = await this.getOneFood(food);
    if (!aux.error) {
      const resp = await axios.post(wsUrl + '/stock', { food });
      return resp.data;
    }
    else return {error: true, details: 'This food does not exist.'}
  }
  catch (e) {
    return { error: true, details: e };
  }
}

async function updateStock(id, amount) {
  try {
    const resp = await axios.patch(wsUrl + `/stock/${id}`, { amount });
    return resp.data;
  }
  catch (e) {
    return { error: true, details: e };
  }
}

async function getAllStock() {
  try {
    const resp = await axios.get(wsUrl + `/stock`);
    return resp.data;
  }
  catch (e) {
    return { error: true, details: e };
  }
}

async function getOneStock(id) {
  try {
    const resp = await axios.get(wsUrl + `/stock/${id}`);
    return resp.data;
  }
  catch (e) {
    return { error: true, details: e };
  }
}