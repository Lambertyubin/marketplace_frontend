import config from "../../config/config";
const create = async (user) => {
  try {
    let response = await fetch(config.apiHost + "/api/users/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const list = async (signal) => {
  try {
    let response = await fetch(config.apiHost + "/api/users/", {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const read = async (userId, credential, signal) => {
  try {
    let response = await fetch(config.apiHost + "/api/users/" + userId, {
      method: "GET",
      signal: signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credential,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const update = async (userId, credential, user) => {
  try {
    let response = await fetch(config.apiHost + "/api/users/" + userId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credential,
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const remove = async (userId, credential) => {
  try {
    let response = await fetch(config.apiHost + "/api/users/" + userId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credential,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const stripeUpdate = async (params, credentials, auth_code, signal) => {
  try {
    let response = await fetch(
      config.apiHost + "/api/stripe_auth/" + params.userId,
      {
        method: "PUT",
        signal: signal,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + credentials.t,
        },
        body: JSON.stringify({ stripe: auth_code }),
      }
    );
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { create, list, read, update, remove, stripeUpdate };
