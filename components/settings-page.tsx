import { Button, PasswordInput, Select, Tabs } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { Dispatch, SetStateAction, useState } from "react";

export const models = [
  { value: "gpt-3.5-turbo", label: "gpt-3.5-turbo" },
  { value: "gpt-3.5-turbo-0301", label: "gpt-3.5-turbo-0301" },
];

interface SettingsPageProps {
  currentModel: string;
  setCurrentModelModel: Dispatch<SetStateAction<string>>;
  tokens: string;
  setTokens: Dispatch<SetStateAction<string>>;
}

export function SettingsPage({
  currentModel,
  setCurrentModelModel,
  tokens,
  setTokens,
}: SettingsPageProps) {
  const [inputToken, setInputToken] = useInputState(tokens);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Tabs.Panel value="settings" pt="xs">
      <PasswordInput
        placeholder="Por favor, insira suas chaves de API"
        label="Chave de API"
        description="Chave de API OpenAI, separe várias chaves com vírgulas."
        withAsterisk
        value={inputToken}
        onChange={setInputToken}
      />

      <Select
        mt="sm"
        placeholder="Por favor, selecione um modelo"
        label="Modelo"
        description="A API OpenAI é alimentada por vários modelos com recursos e preços variados"
        withAsterisk
        defaultValue={currentModel}
        data={models}
        onChange={(value) => {
          if (value) {
            setCurrentModelModel(value);
          }
        }}
        styles={(theme) => ({
          item: {
            // applies styles to selected item
            "&[data-selected]": {
              "&, &:hover": {
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.teal[9]
                    : theme.colors.teal[1],
                color:
                  theme.colorScheme === "dark"
                    ? theme.white
                    : theme.colors.teal[9],
              },
            },

            // applies styles to hovered item (with mouse or keyboard)
            "&[data-hovered]": {},
          },
        })}
      />
      <Button
        mt="xl"
        fullWidth
        loading={isLoading}
        disabled={!inputToken || inputToken === tokens || isLoading}
        onClick={() => {
          setIsLoading(true);
          chrome.storage?.sync.set(
            {
              apiKeys: inputToken,
              currentModel,
            },
            () => {
              if (inputToken) {
                setTokens(inputToken);
              }
              setCurrentModelModel(currentModel);
              setIsLoading(false);
            }
          );
        }}
      >
        Salvar
      </Button>
    </Tabs.Panel>
  );
}
