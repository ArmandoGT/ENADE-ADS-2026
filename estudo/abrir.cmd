@echo off
REM Abre o material de estudo do ENADE 2026 em http://localhost:8000
REM Use este atalho se o navegador nao estiver salvando suas marcacoes
REM ao abrir os arquivos direto do disco.

cd /d "%~dp0"

where py >nul 2>&1
if %errorlevel%==0 (
  set "PY=py"
) else (
  where python >nul 2>&1
  if %errorlevel%==0 (
    set "PY=python"
  ) else (
    echo Python nao encontrado.
    echo.
    echo Sem problema: abra o arquivo index.html com dois cliques.
    echo Tudo funciona, mas alguns navegadores podem nao salvar as marcacoes.
    echo.
    pause
    exit /b 1
  )
)

echo Servindo o material em http://localhost:8000
echo Feche esta janela quando terminar de estudar.
echo.

start "" http://localhost:8000/index.html
%PY% -m http.server 8000
