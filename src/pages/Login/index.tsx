import React from 'react';
import styles from '@/assets/styles/Login.module.css'

const Login: React.FC = () => {
  return (
    <div className={styles.background}>
      <div className="p-8  w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-orange-500 mb-4">K.A.R.L.A</h1>
        <p className="text-white mb-6">
          <span className="font-semibold">Ingresa tus credenciales</span> para poder ingresar
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <p className="text-white text-sm">
            Si no cuentas con tus credenciales por favor contacta a un
            <span className="font-bold text-orange-500"> Admin.</span>
          </p>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-md font-bold hover:bg-orange-600 transition"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
