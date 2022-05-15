import { useMemo } from "react";
import { Command } from "../utils/Command";

export const useMyCobot = () => {
  const command = useMemo(() => new Command(), []);
  return { command };
};
