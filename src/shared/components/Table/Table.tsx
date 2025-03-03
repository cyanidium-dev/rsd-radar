import { ITableProps } from "@/shared/types";
import clsx from "clsx";

export const Table = ({
  className,
  variant = "default",
  data,
  ...props
}: ITableProps) => {
  return (
    <div
      className={clsx(
        "border border-black w-full rounded-[12px]  overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={"bg-white"}>
                <td className="p-2 border-b border-black w-1/2 text-[12px] text-dark leading-[122%] font-raleway font-normal ">
                  {row.label}
                </td>
                <td
                  className={`p-2 border-b border-l border-black w-1/2 text-[12px] text-dark leading-[122%] font-raleway font-medium ${
                    variant === "radar" && index === data.length - 1
                      ? "text-left"
                      : "text-right"
                  }`}
                >
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
