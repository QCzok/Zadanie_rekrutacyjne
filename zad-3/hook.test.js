import { renderHook, act } from "@testing-library/react-hooks";
import { useMemoizedState } from "./hook";

describe("use memoized state hook", () => {
  describe("no compare function", () => {
    test("different value", async () => {
      const { result } = renderHook(() => useMemoizedState(1));

      act(() => {
        result.current[1](2);
      });

      expect(result.current[0]).toEqual(2);
    });

    test("same value", async () => {
      const { result } = renderHook(() => useMemoizedState(1));

      act(() => {
        result.current[1]("1");
      });

      expect(result.current[0]).toEqual(1);
    });
  });

  describe("compare function", () => {
    const compareFn = (a, b) => a == b;

    test("different value", async () => {
      const { result } = renderHook(() => useMemoizedState(1, compareFn));

      act(() => {
        result.current[1](2);
      });

      expect(result.current[0]).toEqual(2);
    });

    test("same value", async () => {
      const { result } = renderHook(() => useMemoizedState(1, compareFn));

      act(() => {
        result.current[1]("1");
      });

      expect(result.current[0]).toEqual(1);
    });
  });
});
