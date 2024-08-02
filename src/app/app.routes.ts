import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { ModusuarioComponent } from './modusuario/modusuario.component';
import { VerdatosComponent } from './verdatos/verdatos.component'; // Importa el componente

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistroComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'modusuario', component: ModusuarioComponent },
  { path: 'verdatos', component: VerdatosComponent }, // Añade la ruta para el nuevo componente
  { path: '**', redirectTo: 'login' }
];
