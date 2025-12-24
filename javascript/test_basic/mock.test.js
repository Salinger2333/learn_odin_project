const axios = {
  get(url) {
    return "i dont give a fuck";
  },
};
const forEach = (items, cb) => {
  for (let item of items) {
    cb(item);
  }
};
const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return results;
};

test("mock callback", () => {
  const mockCalledback = jest.fn((x) => x + 36);
  forEach([0, 1], mockCalledback);
  expect(mockCalledback.mock.calls[0][0]).toBe(0);
  expect(mockCalledback.mock.calls[1][0]).toBe(1);
  expect(mockCalledback.mock.results[0].value).toBe(36);
  expect(mockCalledback.mock.results[1].value).toBe(37);
});

test("mock return", () => {
  const mock = jest.fn();
  mock
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(123)
    .mockReturnValueOnce("Hi Joey");
  let result1 = mock();
  let result2 = mock();
  let result3 = mock();
  expect(result1).toBe(true);
  expect(result2).toBe(123);
  expect(result3).toBe("Hi Joey");
});

test("mock modules or custom functions", async () => {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    id: 1,
    todo: "watch some bilibili",
    notice: "this is a mock",
  });

  const result = await fetchData(1);
  expect(result.todo).toBe("watch some bilibili");
});
