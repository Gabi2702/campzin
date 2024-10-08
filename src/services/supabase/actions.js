import { supabase } from "./client";
import ToastError from "../../components/toast/toastError";
import ToastSucess from "../../components/toast/toastSucess";

class SupabaseService {
  constructor(tableName) {
    this.tableName = tableName;
  }

  async insert(data) {
    const { error } = await supabase
      .from(this.tableName)
      .insert(data);

    if (error) {
      ToastError("Error:", error.message);
      return null;
    }

    ToastSucess("Criado com sucesso!");
    return true;
  }

  async update(data, valueID) {
    const { error } = await supabase
      .from(this.tableName)
      .update(data)
      .eq('id', valueID);

    if (error) {
      ToastError("Error:", error.message);
      return null;
    }

    ToastSucess("Atualizado com sucesso!");
    return true;
  }

  async delete(valueID) {
    const { error } = await supabase
      .from(this.tableName)
      .delete()
      .eq('id', valueID);

    if (error) {
      ToastError("Error:", error.message);
      return null;
    }

    ToastSucess("Deletado com sucesso!");
    return true;
  }

  async selectAll(query) {
    const { data, error } = await supabase
      .from(this.tableName)
      .select(query)  

    if (error) {
      ToastError("Error:", error.message);
      return null;
    }
    return data;
  }

  async selectSpecify(query, filter) {
    const { data, error } = await supabase
      .from(this.tableName)
      .select(query)
      .eq(filter[0],filter[1]);  
    if (error) {
      ToastError("Error:", error.message);
      return null;
    }
    return data;
  }

}

export default SupabaseService;
