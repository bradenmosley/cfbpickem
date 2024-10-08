// Generated by Xata Codegen 0.30.0. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "picks",
    columns: [
      { name: "userId", type: "text", notNull: true, defaultValue: "null" },
      { name: "weekNumber", type: "int", notNull: true, defaultValue: "0" },
      { name: "teams", type: "multiple" },
    ],
  },
  {
    name: "winners",
    columns: [
      { name: "weekNumber", type: "int", notNull: true, defaultValue: "0" },
      { name: "teams", type: "multiple" },
    ],
  },
  {
    name: "records",
    columns: [
      { name: "userId", type: "text", notNull: true, defaultValue: "null" },
      { name: "weekNumber", type: "int", notNull: true, defaultValue: "0" },
      { name: "wins", type: "int", notNull: true, defaultValue: "100" },
      { name: "losses", type: "int", notNull: true, defaultValue: "100" },
    ],
  },
  {
    name: "schedule",
    columns: [
      { name: "weekNumber", type: "int", notNull: true, defaultValue: "0" },
      {
        name: "startDate",
        type: "datetime",
        notNull: true,
        defaultValue: "2024-04-27T00:00:00.000Z",
      },
      {
        name: "endDate",
        type: "datetime",
        notNull: true,
        defaultValue: "2024-04-27T00:00:00.000Z",
      },
      {
        name: "lockTime",
        type: "datetime",
        notNull: true,
        defaultValue: "2024-04-27T00:00:00.000Z",
      },
    ],
  },
  {
    name: "teams",
    columns: [
      { name: "teamName", type: "text", notNull: true, defaultValue: "null" },
      { name: "logo", type: "file", file: { defaultPublicAccess: true } },
    ],
    revLinks: [
      { column: "awayTeam", table: "games" },
      { column: "homeTeam", table: "games" },
    ],
  },
  {
    name: "games",
    columns: [
      { name: "weekNumber", type: "int", notNull: true, defaultValue: "0" },
      { name: "gameNumber", type: "int", notNull: true, defaultValue: "0" },
      { name: "location", type: "text" },
      { name: "awayTeam", type: "link", link: { table: "teams" } },
      { name: "homeTeam", type: "link", link: { table: "teams" } },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Picks = InferredTypes["picks"];
export type PicksRecord = Picks & XataRecord;

export type Winners = InferredTypes["winners"];
export type WinnersRecord = Winners & XataRecord;

export type Records = InferredTypes["records"];
export type RecordsRecord = Records & XataRecord;

export type Schedule = InferredTypes["schedule"];
export type ScheduleRecord = Schedule & XataRecord;

export type Teams = InferredTypes["teams"];
export type TeamsRecord = Teams & XataRecord;

export type Games = InferredTypes["games"];
export type GamesRecord = Games & XataRecord;

export type DatabaseSchema = {
  picks: PicksRecord;
  winners: WinnersRecord;
  records: RecordsRecord;
  schedule: ScheduleRecord;
  teams: TeamsRecord;
  games: GamesRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://bradenmosley-s-workspace-6r97im.us-east-1.xata.sh/db/cfb-pick-em",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
