export default function useUtils(number) {
  function increment() {
    number.value++;
  }

  function decrement() {
    number.value--;
  }

  return {
    increment,
    decrement,
  };
}
