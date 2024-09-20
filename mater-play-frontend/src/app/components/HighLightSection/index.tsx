import { Box, Button, Container, Stack, Typography } from "@mui/material";

function HighLightSection() {
    return (
        <Box>
            <Container>
                <Stack
                    direction="row"
                >
                    <img src="assets/house-of-dragons-poster.jpg"/>
                    <Stack
                        sx={{
                            display: 'flex',
                            direction: 'column',
                            justifyContent: 'center',
                            paddingLeft: '3rem'
                        }}
                    >
                        <Typography
                            variant="h4"
                        >
                            A casa do dragão
                        </Typography>
                        <Typography
                            variant="subtitle2"
                        >
                            <span
                                style={{
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    padding: '0.2rem',
                                    marginRight: '0.3rem'
                                }}
                            >
                                16
                            </span>    
                            Aventura, Fantasia, Ação
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                paddingTop: '2rem',
                                marginBottom: '0.5rem'
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum illum ipsa eos sunt a repellendus nesciunt odio aliquam doloremque. Officiis possimus labore placeat eligendi dolore, deleniti mollitia inventore maxime quisquam.
                        </Typography>
                        <Stack
                            gap={1}
                            direction="row"
                            sx={{
                                paddingY: '1rem'
                            }}
                        >
                            <Button
                                variant="outlined"
                            >Assistir</Button>
                            <Button
                                 variant="outlined"
                            >
                                Detalhes
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default HighLightSection;