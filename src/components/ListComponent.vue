<!-- Vista del Frontend para mostrar lista de datos de la aplicación web -->
<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Fecha  (aaaa-mm-dd)</th>
            <th>Nombre del Evaluador</th>
            <th>Rol del Evaluador</th>
            <th>Persona evaluada</th>
            <th>Código Persona evaluada</th>
            <th>Evaluación</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in Employees" :key="employee._id">
            <td>{{ employee.date }}</td>
            <td>{{ employee.name }}</td>
            <td>{{ employee.rol }}</td>
            <td>{{ employee.evaluatedPerson }}</td>
            <td>{{ employee.workerCode }}</td>
            <td>{{ employee.evaluation }}</td>
            
            <!-- Botones para editar o borrar un registro-->
            <td>
              <router-link
                :to="{ name: 'edit', params: { id: employee._id } }"
                class="btn btn-success"
                >Editar
              </router-link>
              <button
                @click.prevent="deleteEmployee(employee._id)"
                class="btn btn-danger"
              >
                Borrar
              </button>
            </td>
            <!-- Fin Botones para editar o borrar un registro-->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return { Employees: [] 
    };
  },
  created() {
    let apiURL = "http://localhost:4000/api";
    axios
      .get(apiURL)
      .then((res) => {
        this.Employees = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    deleteEmployee(id) {
      let apiURL = `http://localhost:4000/api/delete-employee/${id}`;
      let indexOfArrayItem = this.Employees.findIndex((i) => i._id === id);
      
      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(apiURL)
          .then(() => {
            this.Employees.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>