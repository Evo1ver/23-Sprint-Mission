import { ReactComponent as CheckedIcon } from "@/assets/images/is-checked.svg";

export function TodoCheckbox({ id }: { id: string }) {
  return (
    <div className="relative flex cursor-pointer items-center">
      <input
        type="checkbox"
        className="peer h-8 w-8 cursor-pointer appearance-none rounded-full border-slate-900 bg-yellow-50 outline-2 checked:bg-violet-600 checked:outline-0"
        id={id}
      />
      <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-yellow-50 opacity-0 peer-checked:opacity-100">
        <CheckedIcon />
      </span>
    </div>
  );
}
