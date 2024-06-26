import Head from "next/head";
import { Box, Button, Card, Divider, Group, Tabs, Text } from "@mantine/core";
import { PopCard } from "#/components/pop-card";
import { IconChecks, IconSettings } from "@tabler/icons-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gramaticador</title>
        <meta name="description" content="Escreva melhor agora!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box w={330}>
        <PopCard>
          <Card.Section>
            {/* <Tabs.List> */}
            <Group position="apart">
              <Button
                component="a"
                variant="subtle"
                href="https://github.com/patrickgdl/gramaticador/"
                p={5}
              >
                <Text c="blue" fw={800}>
                  Gramaticador
                </Text>
              </Button>
              <Tabs.Tab value="check" icon={<IconChecks size="0.8rem" />}>
                Home
              </Tabs.Tab>
              <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>
                Ajustes
              </Tabs.Tab>
            </Group>
            {/* </Tabs.List> */}
          </Card.Section>

          <Card.Section>
            <Divider />
          </Card.Section>
        </PopCard>
      </Box>
    </>
  );
}
