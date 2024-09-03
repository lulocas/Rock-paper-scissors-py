import random

def choice():
    jogadas = 'r p s'.split()
    n = 0
    while(n == 0):
     print("Escolha r para pedra, p para papel ou s para tesoura:")
     usuario = input()
     computador = random.choice(jogadas)
     print(f"Computador escolheu: {computador}")
     analise(usuario, computador)
     print("Ainda quer jogar? 0 para sim e 1 para não")
     x = input()
     if(x == "1"):
        n += 1
        print("Tchau!")


def analise(usuario, computador):
   if(usuario == 'r'):
      if(usuario == computador):
         print("Deu empate!")
      elif(computador == 'p'):
         print("Você perdeu :(")
      elif(computador == 's'):
         print("Parabéns! Você ganhou!")

   if(usuario == 'p'):
      if(usuario == computador):
         print("Deu empate!")
      elif(computador == 's'):
         print("Você perdeu :(")
      elif(computador == 'r'):
         print("Parabéns! Você ganhou!")

   if(usuario == 's'):
      if(usuario == computador):
         print("Deu empate!")
      elif(computador == 'r'):
         print("Você perdeu :(")
      elif(computador == 'p'):
         print("Parabéns! Você ganhou!")

print("Vamos brincar!\n")
choice()