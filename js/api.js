const BASE_URL = `https://test-works.pr-uni.ru/`;

export const loginUser = async (login, password) => {
  try {
    const response = await fetch(`${BASE_URL}/api/login/index.php?login=${login}&password=${password}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error();
    };

    const data = await response.json();
    const token = data.token;
    document.cookie = `authToken=${token}`;
    return data;
  } catch (error) {
    return { error: error.message };
  };
};
