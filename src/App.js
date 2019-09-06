import React from "react";

import { css, Section, Typography } from "./branding/system";

import { Paragraph, Button, Icon } from "./branding/components";

import logoUrl from "./Myboox_logo_800.png";

const EMAIL = "contact@myboox.nl";
const WHATSAPP = ["06 - 30 78 85 40"];

function App() {
  return (
    <Section
      themeTypography
      themeBackground
      horizontal
      align="center"
      verticalAlign="center"
      className={css`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      `}
    >
      <Section horizontal spaceBetween="large">
        <Section fluid padding="medium">
          <Section
            className={{ width: "100%", maxWidth: "400px" }}
            vertical
            spaceBetween="large"
          >
            <div>
              <img
                src={logoUrl}
                alt="MyBoox logo"
                // @TODO: Resize the actual image too
                style={{ width: "300px", marginBottom: 0 }}
              />

              <Typography slightlyBold>at your service</Typography>
            </div>
            <Section spaceBetween="small">
              <Section spaceBetween="small" horizontal>
                <Button
                  label={"Neem contact op"}
                  iconBefore="comment"
                  href={"mailto:" + EMAIL}
                  dropShadow
                />
                <Button
                  label={"Ga naar e-boekhouding"}
                  href={
                    "https://secure.e-Boekhouden.nl/bh/default.asp?PRTNR=D8D7F339-6278-4D1C-9382-693B2B4FFAF8"
                  }
                  iconBefore="rocket"
                  dropShadow
                />
              </Section>

              <Section horizontal spaceBetween="small">
                <Section href={"mailto:" + EMAIL}>
                  <Typography
                    dimmed
                    inline
                    slightlyBold
                    slightlySmaller
                    activeColorName="anthraciet"
                  >
                    <Icon name="envelope-o" />
                    {" " + EMAIL}
                  </Typography>
                </Section>
                {WHATSAPP.map(number => (
                  <Section
                    key={number}
                    href={"http://wa.me/31" + number.match(/\d+/g).join("")}
                  >
                    <Typography
                      dimmed
                      inline
                      slightlyBold
                      slightlySmaller
                      activeColorName="anthraciet"
                    >
                      <Icon name="whatsapp" />
                      {" " + number}
                    </Typography>
                  </Section>
                ))}
              </Section>
            </Section>
          </Section>
        </Section>

        <Section align="center" verticalAlign="center" fluid padding="medium">
          <Section
            className={{ width: "100%", maxWidth: "400px" }}
            spaceBetween="medium"
          >
            <Section>
              <Typography extraBold slightlySmaller>
                FACILITEERT
              </Typography>
              <Paragraph>
                Alles zo ingericht om jouw inspanningen tot het hoognodige te
                beperken.
              </Paragraph>
            </Section>

            <Section>
              <Typography extraBold slightlySmaller>
                ASSISTEERT
              </Typography>
              <Paragraph>
                24/7 boekhoudkundige assistentie waar gewenst.
              </Paragraph>
            </Section>

            <Section>
              <Typography extraBold slightlySmaller>
                REGISSEERT
              </Typography>
              <Paragraph>
                Bedrijfsprocessen ingeregeld en advieswerk op maat voor écht
                rendement.
              </Paragraph>
            </Section>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

export default App;
