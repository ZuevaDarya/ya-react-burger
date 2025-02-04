export enum Status {
  Pending = "pending",
  Done = "done",
  Created = "created",
};

export const STATUS_TEXT = {
  [Status.Pending]: "Готовится",
  [Status.Done]: "Выполнен",
  [Status.Created]: "Создан",
};
