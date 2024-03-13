import { Routes } from "@angular/router";
import { ContentRoutesAuthGuard } from "../auth/content-routes-auth.guard";

export const CONTENT_ROUTES: Routes = [
  {
    path: "",
    canActivate: [ContentRoutesAuthGuard],
    loadChildren: () =>
      import("src/app/page/dashboards/dashboards.module").then(
        (m) => m.DashboardsModule
      ),
  },
  {
    path: "admin",
    canActivate: [ContentRoutesAuthGuard],
    loadChildren: () =>
      import("src/app/page/admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "member",
    canActivate: [ContentRoutesAuthGuard],
    loadChildren: () =>
      import("src/app/page/member/member.module").then((m) => m.MemberModule),
  },
];
