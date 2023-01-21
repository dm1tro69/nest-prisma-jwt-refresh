import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";
import { Tokens } from "./types/token.types";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('local/signup')
 async signupLocal(@Body() dto: AuthDto): Promise<Tokens>{
     return this.authService.signupLocal(dto)
  }

  @Post('local/signin')
  signinLocal(@Body() dto: AuthDto){
    return this.authService.signinLocal(dto)
  }

  @Post('logout')
  logout(){
    return this.authService.logout()
  }

  @Post('refresh')
  refreshTokens(){
     return this.authService.refreshTokens()
  }
}
