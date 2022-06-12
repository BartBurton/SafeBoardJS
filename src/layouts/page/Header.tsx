import { Box } from '@mui/system'
import Children from 'src/types/Children'

const Header = ({ children }: Children) => (
    <Box p={3} boxShadow={1} mb={3} bgcolor="background.paper">
        {children}
    </Box>
)

export default Header
