import React, { useState } from "react";
import { axios }  from "axios";
import { Button, CircularProgress, styled, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

type FormData = {
  text: string;
};

export const App: React.FC = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async(data: FormData) => {
    try{
      const res = await axios.post("http://localhost:8000/index.php",data);
      setError(res.data.error);
      setMessage(res.data.message);
    }catch{
      setError(true);
      setMessage("通信に失敗しました");
    }
  };

  return(
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          defaultValue=""
          margin="normal"
          variant="outlined"
          name="text"
          error={error}
          inputRef={register}
          helperText={message}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isSubmitting}>
          {isSubmitting ? <CircularProgress size={24} /> : "送信"}
        </Button>
      </Form>
    </>
  );
};

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  width: 300,
  margin: "0 auto",
});