import React from 'react';
import {Input} from "../../components/Input/Input";
import {withAuthLayout} from "../../AuthLayout/AuthLayout";
import {H} from "../../components/Htag/Htag";
import {Button} from "../../components/Button/Button";
import {AuthFooter} from "../../AuthLayout/Footer/Footer";

function Index():JSX.Element {
  return (
      <>
        <Input state={"default"} label={"Label"} hint={"Ошибка"} placeholder={"Typing"}></Input>
        <Input state={"error-filled"} label={"Label"} hint={"Ошибка"} placeholder={"Typing"}></Input>
        <Input state={"disabled-filled"} label={"Label"} hint={"Ошибка"} placeholder={"Typing"}></Input>
        <Input state={"disabled-empty"} label={"Label"} hint={"Ошибка"} placeholder={"Typing"}></Input>
        <H type={"h1"}>Привет</H>
        <H type={"h2"}>Привет</H>
        <H type={"h3"}>Привет</H>
        <Button type={"primary"} state={"default"} icon={"plus"}>Label</Button>
        <Button type={"secondary"} state={"default"} icon={"plus"}>Label</Button>
        <Button state={"click"} icon={"plus"}>Label</Button>
        <Button type={"primary"} state={"disabled"} icon={"plus"}>Label</Button>
        <Button type={"secondary"} state={"disabled"} icon={"plus"}>Label</Button>
      </>


  );
}

export default withAuthLayout(Index);
