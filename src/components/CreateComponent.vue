<!-- Vista del Frontend para ingreso de datos de la aplicación web -->
<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Crear Evaluación</h3>
      <form @submit.prevent="handleSubmitForm">
        
        <div class="form-group">
          <label>Fecha</label>
          <input
            type="date"
            class="form-control"
            v-model="employee.date"
            required
          />
        </div>
        <br>

        <div class="form-group">
          <label>Nombre del Evaluador</label>
          <input
            type="text"
            class="form-control"
            v-model="employee.name"
            required
          />
        </div>
        <br>

        <!-- Formulario de selección desplegable -->
        <div>
          <label>Rol del Evaluador</label><br>
            <select name="my-select" id="evaluation_rol" v-model="employee.rol" required>
                <option value="Cliente">Cliente</option>
                <option value="Jefe inmediato">Jefe inmediato</option>
                <option value="Colega">Colega</option>
                <option value="Subordinado">Subordinado</option>
                <option value="Autoevaluación">Autoevaluación</option>
            </select>
        </div>
        <br>
        <!-- Fin de Formulario de selección desplegable -->

        <div class="form-group">
          <label>Nombre de la persona a evaluar</label>
          <input
            type="text"
            class="form-control"
            v-model="employee.evaluatedPerson"
            required
          />
        </div>
        <br>

        <div class="form-group">
          <label>Código de la persona a evaluar</label>
          <input
            type="number"
            class="form-control"
            v-model="employee.workerCode"
            required
          />
        </div>
        <br>

        <div class="form-group">
          <label>Evaluación (0 a 5)</label>
          <input
            type="number"
            class="form-control"
            v-model="employee.evaluation"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Crear</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      employee: {
        fecha: "",
        nombre: "",
        rol: "",
        nombre_evaluado: "",
        evaluacion: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-employee";

      axios
        .post(apiURL, this.employee)
        .then(() => {
          this.$router.push("/view");
          this.employee = {
            date:"",
            name: "",
            rol: "",
            evaluatedPerson: "",
            evaluation: "",
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
