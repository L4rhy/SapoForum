import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

export default function PaginaPrincipal() {
    return(
        <Box>
            <Box>
                <Box>
                <Text>
                    Bem-Vinde ao SapoForum
                </Text>
                </Box>            
            </Box>
        </Box>
    )
}