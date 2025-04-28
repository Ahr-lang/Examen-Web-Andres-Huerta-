import { employees } from '../db/employeesDb';

// Handler: lógica de negocio
export function validateEmployee(username: string, password: string) {
  const employee = employees.find(
    (emp) => emp.username === username && emp.password === password
  );

  if (!employee) {
    return null;
  }

  // No mandamos la contraseña de vuelta, solo los datos públicos
  const { fullName, email } = employee;
  return { fullName, email };
}
