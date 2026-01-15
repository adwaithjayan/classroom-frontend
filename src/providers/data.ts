import { MOCK_SUBJECTS } from "@/constants/mock-data";
import {
  DataProvider,
  GetListResponse,
  GetListParams,
  BaseRecord,
} from "@refinedev/core";

export const dataProvider: DataProvider = {
  getList: async <TData extends BaseRecord = BaseRecord>({
    resource,
  }: GetListParams): Promise<GetListResponse<TData>> => {
    if (resource !== "subjects") {
      return { data: [] as TData[], total: 0 };
    }
    return {
      data: MOCK_SUBJECTS as unknown as TData[],
      total: MOCK_SUBJECTS.length,
    };
  },

  getOne: async () => {
    throw new Error("Not Found");
  },
  create: async () => {
    throw new Error("Not Found");
  },
  update: async () => {
    throw new Error("Not Found");
  },
  deleteOne: async () => {
    throw new Error("Not Found");
  },

  getApiUrl: () => "",
};
