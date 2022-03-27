"use strict";(self.webpackChunkModelProject=self.webpackChunkModelProject||[]).push([[703],{8703:(H,_,d)=>{d.r(_),d.d(_,{EmpModule:()=>L});var u=d(9808),e=d(4893),g=d(520);let y=(()=>{class l{constructor(t){this.http=t}getAllEmployee(){return this.http.get("https://localhost:44316/api/Employee")}ViewDetailsEmployee(t){return this.http.get("https://localhost:44316/api/Employee/GetEmployeeById?id="+t)}updateEmp(t){return this.http.put("https://localhost:44316/api/Employee",t)}newEmployee(t){return this.http.post("https://localhost:44316/api/Employee/RegisterEmployee",t)}deleteEmployeeById(t){return this.http.delete("https://localhost:44316/api/Employee/DeleteFromEmployee?Id="+t)}}return l.\u0275fac=function(t){return new(t||l)(e.LFG(g.eN))},l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();var p=d(5185);function h(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td")(16,"button",8),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().goToView(s.id)}),e._uU(17,"View"),e.qZA(),e.TgZ(18,"button",9),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().goToEdite(s.id)}),e._uU(19,"Edite"),e.qZA(),e.TgZ(20,"button",10),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().goToDelete(s.id)}),e._uU(21,"Delete"),e.qZA()()()}if(2&l){const t=n.$implicit;e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Oqu(t.firstName),e.xp6(2),e.Oqu(t.lastName),e.xp6(2),e.Oqu(t.phone),e.xp6(2),e.Oqu(t.addres),e.xp6(2),e.Oqu(t.email),e.xp6(2),e.Oqu(t.salary)}}let v=(()=>{class l{constructor(t,i){this.homeserv=t,this.rout=i,this.allEmployee=[]}ngOnInit(){this.getAllEmployee()}getAllEmployee(){this.homeserv.getAllEmployee().subscribe(t=>{this.allEmployee=t})}goToView(t){this.rout.navigate(["emp/detailsEmployee"],{queryParams:{empId:t}})}goToEdite(t){this.rout.navigate(["emp/detailsEmployee/edite"],{queryParams:{empId:t}})}goToNew(){this.rout.navigate(["emp/detailsEmployee/edite/new"])}goToDelete(t){this.homeserv.deleteEmployeeById(t).subscribe(i=>{this.getAllEmployee()})}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(y),e.Y36(p.F0))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-get-employee"]],decls:25,vars:1,consts:[[1,"container-fluid"],[1,"text-center"],[1,"text-danger"],[1,"container-fluid","section-1"],[1,"container"],["type","button",1,"btn","btn-primary","new",3,"click"],[1,"table","table-striped","table-hover"],[4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary","back-btn-1",3,"click"],["type","button",1,"btn","btn-danger","back-btn-2",3,"click"],["type","button",1,"btn","btn-danger","back-btn-3",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h1",2),e._uU(3,"Get All Employee"),e.qZA()()(),e.TgZ(4,"section",3)(5,"div",4)(6,"button",5),e.NdJ("click",function(){return i.goToNew()}),e._uU(7,"Add New"),e.qZA(),e.TgZ(8,"table",6)(9,"tr")(10,"th"),e._uU(11,"Id"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"First Name"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Last Name"),e.qZA(),e.TgZ(16,"th"),e._uU(17,"Phone"),e.qZA(),e.TgZ(18,"th"),e._uU(19,"addres"),e.qZA(),e.TgZ(20,"th"),e._uU(21,"email"),e.qZA(),e.TgZ(22,"th"),e._uU(23,"salary"),e.qZA()(),e.YNc(24,h,22,7,"tr",7),e.qZA()()()),2&t&&(e.xp6(24),e.Q6J("ngForOf",i.allEmployee))},directives:[u.sg],styles:["body[_ngcontent-%COMP%]{padding:0;margin:0}.back-btn-1[_ngcontent-%COMP%]{background-color:green}.back-btn-2[_ngcontent-%COMP%]{background-color:#00f}.back-btn-3[_ngcontent-%COMP%]{background-color:red}.new[_ngcontent-%COMP%]{float:right;width:11em;height:3em}"]}),l})();var o=d(2382);function f(l,n){1&l&&(e.TgZ(0,"div",19)(1,"small"),e._uU(2,"*The First name is required"),e.qZA()())}function b(l,n){1&l&&(e.TgZ(0,"div",19)(1,"small"),e._uU(2,"*The Last name is required"),e.qZA()())}function x(l,n){1&l&&(e.TgZ(0,"div",19)(1,"small"),e._uU(2,"*The Phone required"),e.qZA()())}function E(l,n){1&l&&(e.TgZ(0,"div",19)(1,"small"),e._uU(2,"*The Addres required"),e.qZA()())}function Z(l,n){1&l&&(e.TgZ(0,"div",19)(1,"small"),e._uU(2,"*The User Name required"),e.qZA()())}function T(l,n){if(1&l&&(e.TgZ(0,"div",7)(1,"label",8),e._uU(2,"User Name:"),e.qZA(),e._UZ(3,"input",20),e.YNc(4,Z,3,0,"div",10),e.qZA()),2&l){const t=e.oxw(2);let i;e.xp6(4),e.Q6J("ngIf",(null==(i=t.employeeForm.get("UserName"))?null:i.invalid)&&((null==(i=t.employeeForm.get("UserName"))?null:i.dirty)||(null==(i=t.employeeForm.get("UserName"))?null:i.touched)))}}function q(l,n){1&l&&(e.TgZ(0,"div",19)(1,"small"),e._uU(2,"*The Password required"),e.qZA()())}function w(l,n){if(1&l&&(e.TgZ(0,"div",7)(1,"label",8),e._uU(2,"Password:"),e.qZA(),e._UZ(3,"input",21),e.YNc(4,q,3,0,"div",10),e.qZA()),2&l){const t=e.oxw(2);let i;e.xp6(3),e.Q6J("disabled",t.disableInput),e.xp6(1),e.Q6J("ngIf",(null==(i=t.employeeForm.get("Password"))?null:i.invalid)&&((null==(i=t.employeeForm.get("Password"))?null:i.dirty)||(null==(i=t.employeeForm.get("Password"))?null:i.touched)))}}function I(l,n){1&l&&(e.TgZ(0,"div",24)(1,"small"),e._uU(2,"*The Role required"),e.qZA()())}function N(l,n){if(1&l&&(e.TgZ(0,"div",7)(1,"label",8),e._uU(2,"Role:"),e.qZA(),e._UZ(3,"input",22),e.YNc(4,I,3,0,"div",23),e.qZA()),2&l){const t=e.oxw(2);let i;e.xp6(4),e.Q6J("ngIf",(null==(i=t.employeeForm.get("Role"))?null:i.invalid)&&((null==(i=t.employeeForm.get("Role"))?null:i.dirty)||(null==(i=t.employeeForm.get("Role"))?null:i.touched)))}}function C(l,n){1&l&&(e.TgZ(0,"div",19)(1,"small"),e._uU(2,"*The Gender required"),e.qZA()())}function A(l,n){if(1&l&&(e.TgZ(0,"div",7)(1,"label",8),e._uU(2,"Gender:"),e.qZA(),e._UZ(3,"input",25),e.YNc(4,C,3,0,"div",10),e.qZA()),2&l){const t=e.oxw(2);let i;e.xp6(3),e.Q6J("disabled",t.disableInput),e.xp6(1),e.Q6J("ngIf",(null==(i=t.employeeForm.get("Gender"))?null:i.invalid)&&((null==(i=t.employeeForm.get("Gender"))?null:i.dirty)||(null==(i=t.employeeForm.get("Gender"))?null:i.touched)))}}function F(l,n){1&l&&(e.TgZ(0,"div",19)(1,"small"),e._uU(2,"*The Employee Salary required"),e.qZA()())}function U(l,n){if(1&l&&(e.TgZ(0,"div",7)(1,"label",8),e._uU(2,"Employee Salary:"),e.qZA(),e._UZ(3,"input",26),e.YNc(4,F,3,0,"div",10),e.qZA()),2&l){const t=e.oxw(2);let i;e.xp6(4),e.Q6J("ngIf",(null==(i=t.employeeForm.get("EmployeeSalary"))?null:i.invalid)&&((null==(i=t.employeeForm.get("EmployeeSalary"))?null:i.dirty)||(null==(i=t.employeeForm.get("EmployeeSalary"))?null:i.touched)))}}function k(l,n){1&l&&(e.TgZ(0,"div",19)(1,"small"),e._uU(2,"*The Employee Bounes required"),e.qZA()())}function J(l,n){if(1&l&&(e.TgZ(0,"div",7)(1,"label",8),e._uU(2,"Employee Bounes:"),e.qZA(),e._UZ(3,"input",27),e.YNc(4,k,3,0,"div",10),e.qZA()),2&l){const t=e.oxw(2);let i;e.xp6(3),e.Q6J("disabled",t.disableInput),e.xp6(1),e.Q6J("ngIf",(null==(i=t.employeeForm.get("EmployeeBounes"))?null:i.invalid)&&((null==(i=t.employeeForm.get("EmployeeBounes"))?null:i.dirty)||(null==(i=t.employeeForm.get("EmployeeBounes"))?null:i.touched)))}}function D(l,n){1&l&&(e.TgZ(0,"div",19)(1,"small"),e._uU(2,"*The Email required"),e.qZA()())}function V(l,n){1&l&&(e.TgZ(0,"div",19)(1,"small"),e._uU(2,"*The Salary required"),e.qZA()())}function Q(l,n){if(1&l&&(e.TgZ(0,"div",7)(1,"label",8),e._uU(2,"Salary:"),e.qZA(),e._UZ(3,"input",28),e.YNc(4,V,3,0,"div",10),e.qZA()),2&l){const t=e.oxw(2);let i;e.xp6(3),e.Q6J("disabled",t.disableInput),e.xp6(1),e.Q6J("ngIf",(null==(i=t.employeeForm.get("salary"))?null:i.invalid)&&((null==(i=t.employeeForm.get("salary"))?null:i.dirty)||(null==(i=t.employeeForm.get("salary"))?null:i.touched)))}}function Y(l,n){1&l&&(e.TgZ(0,"div",19)(1,"small"),e._uU(2,"*The Bounas required"),e.qZA()())}function P(l,n){if(1&l&&(e.TgZ(0,"div",29)(1,"label",8),e._uU(2,"Bounas:"),e.qZA(),e._UZ(3,"input",30),e.YNc(4,Y,3,0,"div",10),e.qZA()),2&l){const t=e.oxw(2);let i;e.xp6(3),e.Q6J("disabled",t.disableInput),e.xp6(1),e.Q6J("ngIf",(null==(i=t.employeeForm.get("bounas"))?null:i.invalid)&&((null==(i=t.employeeForm.get("bounas"))?null:i.dirty)||(null==(i=t.employeeForm.get("bounas"))?null:i.touched)))}}function M(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"div",31)(1,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).backToTable()}),e._uU(2,"Back"),e.qZA()()}}function O(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"div",31)(1,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).updateEmp()}),e._uU(2,"update change"),e.qZA()()}}function B(l,n){if(1&l){const t=e.EpF();e.TgZ(0,"div",31)(1,"button",32),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).createEmp()}),e._uU(2,"Create"),e.qZA()()}}function G(l,n){if(1&l&&(e.TgZ(0,"section",4)(1,"form",5)(2,"div",6)(3,"div",7)(4,"label",8),e._uU(5,"First Name:"),e.qZA(),e._UZ(6,"input",9),e.YNc(7,f,3,0,"div",10),e.qZA(),e.TgZ(8,"div",7)(9,"label",8),e._uU(10,"Last Name:"),e.qZA(),e._UZ(11,"input",11),e.YNc(12,b,3,0,"div",10),e.qZA()(),e.TgZ(13,"div",6)(14,"div",7)(15,"label",8),e._uU(16,"Phone:"),e.qZA(),e._UZ(17,"input",12),e.YNc(18,x,3,0,"div",10),e.qZA(),e.TgZ(19,"div",7)(20,"label",8),e._uU(21,"Addres:"),e.qZA(),e._UZ(22,"input",13),e.YNc(23,E,3,0,"div",10),e.qZA()(),e.TgZ(24,"div",6),e.YNc(25,T,5,1,"div",14),e.YNc(26,w,5,2,"div",14),e.qZA(),e.TgZ(27,"div",6),e.YNc(28,N,5,1,"div",14),e.YNc(29,A,5,2,"div",14),e.qZA(),e.TgZ(30,"div",6),e.YNc(31,U,5,1,"div",14),e.YNc(32,J,5,2,"div",14),e.qZA(),e.TgZ(33,"div",6)(34,"div",7)(35,"label",8),e._uU(36,"Email:"),e.qZA(),e._UZ(37,"input",15),e.YNc(38,D,3,0,"div",10),e.qZA(),e.YNc(39,Q,5,2,"div",14),e.qZA(),e.TgZ(40,"div",6),e.YNc(41,P,5,2,"div",16),e._UZ(42,"div",17),e.qZA(),e.YNc(43,M,3,0,"div",18),e.YNc(44,O,3,0,"div",18),e.YNc(45,B,3,0,"div",18),e.qZA()()),2&l){const t=e.oxw();let i,a,s,r,m;e.xp6(1),e.Q6J("formGroup",t.employeeForm),e.xp6(6),e.Q6J("ngIf",(null==(i=t.employeeForm.get("firstName"))?null:i.invalid)&&((null==(i=t.employeeForm.get("firstName"))?null:i.dirty)||(null==(i=t.employeeForm.get("firstName"))?null:i.touched))),e.xp6(4),e.Q6J("disabled",t.disableInput),e.xp6(1),e.Q6J("ngIf",(null==(a=t.employeeForm.get("lastName"))?null:a.invalid)&&((null==(a=t.employeeForm.get("lastName"))?null:a.dirty)||(null==(a=t.employeeForm.get("lastName"))?null:a.touched))),e.xp6(5),e.Q6J("disabled",t.disableInput),e.xp6(1),e.Q6J("ngIf",(null==(s=t.employeeForm.get("phone"))?null:s.invalid)&&((null==(s=t.employeeForm.get("phone"))?null:s.dirty)||(null==(s=t.employeeForm.get("phone"))?null:s.touched))),e.xp6(4),e.Q6J("disabled",t.disableInput),e.xp6(1),e.Q6J("ngIf",(null==(r=t.employeeForm.get("addres"))?null:r.invalid)&&((null==(r=t.employeeForm.get("addres"))?null:r.dirty)||(null==(r=t.employeeForm.get("addres"))?null:r.touched))),e.xp6(2),e.Q6J("ngIf",!t.create),e.xp6(1),e.Q6J("ngIf",!t.create),e.xp6(2),e.Q6J("ngIf",!t.create),e.xp6(1),e.Q6J("ngIf",!t.create),e.xp6(2),e.Q6J("ngIf",!t.create),e.xp6(1),e.Q6J("ngIf",!t.create),e.xp6(5),e.Q6J("disabled",t.disableInput),e.xp6(1),e.Q6J("ngIf",(null==(m=t.employeeForm.get("email"))?null:m.invalid)&&((null==(m=t.employeeForm.get("email"))?null:m.dirty)||(null==(m=t.employeeForm.get("email"))?null:m.touched))),e.xp6(1),e.Q6J("ngIf",t.create),e.xp6(2),e.Q6J("ngIf",t.create),e.xp6(2),e.Q6J("ngIf",t.showButton),e.xp6(1),e.Q6J("ngIf",t.showButtonSave),e.xp6(1),e.Q6J("ngIf",t.createEmpl)}}let c=(()=>{class l{constructor(t,i,a){this.activatedToute=t,this.homeserv=i,this.rout=a,this.title="",this.showButton=!1,this.disableInput=!1,this.showButtonSave=!1,this.create=!0,this.createEmpl=!0,this.detailsEmployee=[]}ngOnInit(){var t,i,a,s;(null===(i=null===(t=this.activatedToute.snapshot.routeConfig)||void 0===t?void 0:t.path)||void 0===i?void 0:i.includes("edite"))?(null===(a=this.activatedToute.snapshot.routeConfig)||void 0===a?void 0:a.path.includes("new"))?(null===(s=this.activatedToute.snapshot.routeConfig)||void 0===s?void 0:s.path.includes("new"))&&(this.title="CREATE NEW EMPLOYEE",this.showButton=!0,this.disableInput=!1,this.showButtonSave=!1,this.create=!1,this.createEmpl=!0):(this.title="Edite Details Employee",this.showButton=!0,this.disableInput=!1,this.showButtonSave=!0,this.createEmpl=!1):(this.title="View Details Employee",this.showButton=!0,this.showButtonSave=!1,this.disableInput=!0,this.createEmpl=!1);var r=this.activatedToute.snapshot.queryParams.empId;r?this.viewDetailsEmployee(r):this.buildEmployeeForm()}buildEmployeeForm(){this.employeeForm=new o.cw({id:new o.NI({value:this.detailsEmployee.id,disabled:this.disableInput},this.create?o.kI.required:null),genderId:new o.NI({value:this.detailsEmployee.genderId,disabled:this.disableInput}),attendances:new o.NI({value:this.detailsEmployee.attendances,disabled:this.disableInput}),logins:new o.NI({value:this.detailsEmployee.logins,disabled:this.disableInput}),taskEmployees:new o.NI({value:this.detailsEmployee.taskEmployees,disabled:this.disableInput}),firstName:new o.NI({value:this.detailsEmployee.firstName,disabled:this.disableInput},o.kI.required),lastName:new o.NI({value:this.detailsEmployee.lastName,disabled:this.disableInput},o.kI.required),phone:new o.NI({value:this.detailsEmployee.phone,disabled:this.disableInput},o.kI.required),addres:new o.NI({value:this.detailsEmployee.addres,disabled:this.disableInput},o.kI.required),email:new o.NI({value:this.detailsEmployee.email,disabled:this.disableInput},o.kI.required),salary:new o.NI({value:this.detailsEmployee.salary,disabled:this.disableInput},this.create?o.kI.required:null),bounas:new o.NI({value:this.detailsEmployee.bounas,disabled:this.disableInput},this.create?o.kI.required:null),UserName:new o.NI({value:"",disabled:this.disableInput||this.create},o.kI.required),Password:new o.NI({value:"",disabled:this.disableInput||this.create},o.kI.required),Gender:new o.NI({value:"",disabled:this.disableInput||this.create},o.kI.required),Role:new o.NI({value:"",disabled:this.disableInput||this.create},o.kI.required),EmployeeSalary:new o.NI({value:"",disabled:this.disableInput||this.create},o.kI.required),EmployeeBounes:new o.NI({value:"",disabled:this.disableInput||this.create},o.kI.required)})}viewDetailsEmployee(t){this.homeserv.ViewDetailsEmployee(t).subscribe(i=>{this.detailsEmployee=i,console.log(this.detailsEmployee),this.buildEmployeeForm()})}backToTable(){this.rout.navigate(["emp"])}updateEmp(){this.employeeForm.valid?this.homeserv.updateEmp(this.employeeForm.value).subscribe(t=>{this.rout.navigate(["emp"]),console.log(t)},t=>{console.error("faild")}):alert("somthing woring")}createEmp(){this.employeeForm.valid?this.homeserv.newEmployee(this.employeeForm.value).subscribe(t=>{this.rout.navigate(["emp"])},t=>{alert(t)}):alert("somthing woring")}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(p.gz),e.Y36(y),e.Y36(p.F0))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-view-details-employee"]],decls:5,vars:2,consts:[[1,"container-fluid","section-1"],[1,"text-center"],[1,"text-danger"],["class","container",4,"ngIf"],[1,"container"],[3,"formGroup"],[1,"row"],[1,"col"],[1,"style-label"],["type","text","formControlName","firstName","aria-label","First name","required","",1,"form-control","style-input"],["class","text-danger valid-div",4,"ngIf"],["type","text","formControlName","lastName","required","","aria-label","Last name",1,"form-control","style-input",3,"disabled"],["type","text","formControlName","phone","required","","aria-label","First name",1,"form-control","style-input",3,"disabled"],["type","text","formControlName","addres","required","","aria-label","Last name",1,"form-control","style-input",3,"disabled"],["class","col",4,"ngIf"],["type","text","formControlName","email","required","","aria-label","First name",1,"form-control","style-input",3,"disabled"],["class","col-sm-8  offset-2",4,"ngIf"],[1,"col","offset-2"],["class","text-center back ",4,"ngIf"],[1,"text-danger","valid-div"],["type","text","formControlName","UserName","required","","aria-label","First name",1,"form-control","style-input"],["type","password","formControlName","Password","required","","aria-label","Last name",1,"form-control","style-input",3,"disabled"],["type","text","formControlName","Role","required","","aria-label","First name",1,"form-control","style-input"],["class","text-danger valid-div","required","",4,"ngIf"],["required","",1,"text-danger","valid-div"],["type","text","formControlName","Gender","required","","aria-label","Last name","placeholder","Male/Female",1,"form-control","style-input",3,"disabled"],["type","number","formControlName","EmployeeSalary","required","","aria-label","First name",1,"form-control","style-input"],["type","number","formControlName","EmployeeBounes","required","","aria-label","Last name",1,"form-control","style-input",3,"disabled"],["type","number","formControlName","salary","required","","aria-label","Last name",1,"form-control","style-input",3,"disabled"],[1,"col-sm-8","offset-2"],["type","number","formControlName","bounas","required","","aria-label","First name",1,"form-control","style-input",3,"disabled"],[1,"text-center","back"],["type","button",1,"btn","btn-danger","butt",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h1",2),e._uU(3),e.qZA()()(),e.YNc(4,G,46,21,"section",3)),2&t&&(e.xp6(3),e.Oqu(i.title),e.xp6(1),e.Q6J("ngIf",i.employeeForm))},directives:[u.O5,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,o.Q7,o.wV],styles:[".section-1[_ngcontent-%COMP%]{padding-bottom:5em;padding-top:5em}.style-input[_ngcontent-%COMP%]{width:90%;height:3em;padding:34px;margin:8px;background-color:#c3c3c399;color:#000;font-weight:700;text-align:center;font-size:25px}form[_ngcontent-%COMP%]{padding-top:3em;padding-bottom:3em;border:1px solid red;border-radius:5px}.title[_ngcontent-%COMP%]{border:1px solid red;border-radius:5px}.style-label[_ngcontent-%COMP%]{font-size:30px;margin:9px;color:#dc3545;font-family:fantasy}.back[_ngcontent-%COMP%]{padding-bottom:0;padding-top:2em}.butt[_ngcontent-%COMP%]{width:20em;font-size:23px;font-weight:700}.valid-div[_ngcontent-%COMP%]{font-size:20px;margin-left:26px}.form-control.ng-touched.ng-invalid[_ngcontent-%COMP%]{border:1px solid red}.form-control.ng-touched.ng-valid[_ngcontent-%COMP%]{border:1px solid green}"]}),l})();const S=[{path:"",component:v},{path:"detailsEmployee",component:c},{path:"detailsEmployee/edite/new",component:c},{path:"detailsEmployee/edite",component:c}];let L=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[u.ez,p.Bz.forChild(S)]]}),l})()}}]);