import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { AppLayoutComponent } from "./layout/app.layout.component";
import { CONTENT_ROUTES } from "./shared/routes/contents-layout.routes";
import { ContentRoutesAuthGuard } from "./shared/auth/content-routes-auth.guard";

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
};

const routes: Routes = [
  {
    path: "",
    component: AppLayoutComponent,
    data: {},
    children: CONTENT_ROUTES,
    canActivate: [ContentRoutesAuthGuard],
  },
  {
    path: "auth",
    data: { breadcrumb: "Auth" },
    loadChildren: () =>
      import("./page/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "admin",
    data: { breadcrumb: "Admin" },
    loadChildren: () =>
      import("./page/admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "member",
    data: { breadcrumb: "Member" },
    loadChildren: () =>
      import("./page/member/member.module").then((m) => m.MemberModule),
  },
  { path: "**", redirectTo: "/notfound" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
