export enum SELECT_ORDER {
  RECENT = '최신순',
  FAVORITE = '좋아요순',
}

export type SelectdValue = SELECT_ORDER.RECENT | SELECT_ORDER.FAVORITE;

export const selectList = [SELECT_ORDER.RECENT, SELECT_ORDER.FAVORITE] as const;
